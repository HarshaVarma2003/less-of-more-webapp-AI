
import { Fellowship, Activity, Podcast } from '../types/admin';
import { initialFellowships, initialActivities, initialPodcasts } from '../data/initialData';

// Base URL for API requests
const API_BASE_URL = '/api';

// Generic fetch function with error handling
async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
}

// Specialized fetch functions for different content types
export async function fetchFellowships(): Promise<Fellowship[]> {
  try {
    return await fetchFromAPI<Fellowship[]>('/fellowships');
  } catch (error) {
    console.error('Failed to fetch fellowships from API, using initial data');
    return initialFellowships;
  }
}

export async function fetchFellowshipById(id: number): Promise<Fellowship | null> {
  try {
    return await fetchFromAPI<Fellowship>(`/fellowships/${id}`);
  } catch (error) {
    console.error(`Failed to fetch fellowship with ID ${id}`);
    const fallback = initialFellowships.find(f => f.id === id) || null;
    return fallback;
  }
}

export async function fetchActivities(): Promise<Activity[]> {
  try {
    return await fetchFromAPI<Activity[]>('/activities');
  } catch (error) {
    console.error('Failed to fetch activities from API, using initial data');
    return initialActivities;
  }
}

export async function fetchPodcasts(): Promise<Podcast[]> {
  try {
    return await fetchFromAPI<Podcast[]>('/podcasts');
  } catch (error) {
    console.error('Failed to fetch podcasts from API, using initial data');
    return initialPodcasts;
  }
}
