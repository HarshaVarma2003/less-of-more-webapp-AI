
import { Fellowship, Activity, Podcast } from '../types/admin';
import { initialFellowships, initialActivities, initialPodcasts } from '../data/initialData';

// Base URL for API requests
const API_BASE_URL = '/api';

// Generic fetch function with error handling
async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  try {
    // In a real environment, this would be a fetch to an actual API endpoint
    // For our current setup, we'll simulate API behavior by getting data from localStorage
    console.log(`Fetching data from ${endpoint}`);
    
    // Get data from localStorage if available
    if (endpoint.includes('fellowships')) {
      if (endpoint.includes('/')) {
        // Single fellowship request
        const id = Number(endpoint.split('/').pop());
        const storedData = localStorage.getItem('lom_fellowships');
        const fellowships = storedData ? JSON.parse(storedData) : initialFellowships;
        const fellowship = fellowships.find((f: Fellowship) => f.id === id);
        return fellowship as T;
      }
      // All fellowships request
      const storedData = localStorage.getItem('lom_fellowships');
      return (storedData ? JSON.parse(storedData) : initialFellowships) as T;
    } else if (endpoint.includes('activities')) {
      const storedData = localStorage.getItem('lom_activities');
      return (storedData ? JSON.parse(storedData) : initialActivities) as T;
    } else if (endpoint.includes('podcasts')) {
      const storedData = localStorage.getItem('lom_podcasts');
      return (storedData ? JSON.parse(storedData) : initialPodcasts) as T;
    }
    
    // If no match, simulate API error
    throw new Error(`API endpoint not found: ${endpoint}`);
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
}

// Specialized fetch functions for different content types
export async function fetchFellowships(): Promise<Fellowship[]> {
  try {
    console.log('Fetching fellowships');
    const data = await fetchFromAPI<Fellowship[]>('/fellowships');
    console.log('Fetched fellowships:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch fellowships, using initial data');
    return initialFellowships;
  }
}

export async function fetchFellowshipById(id: number): Promise<Fellowship | null> {
  try {
    console.log(`Fetching fellowship with ID ${id}`);
    const data = await fetchFromAPI<Fellowship>(`/fellowships/${id}`);
    console.log('Fetched fellowship:', data);
    return data;
  } catch (error) {
    console.error(`Failed to fetch fellowship with ID ${id}`);
    const fallback = initialFellowships.find(f => f.id === id) || null;
    return fallback;
  }
}

export async function fetchActivities(): Promise<Activity[]> {
  try {
    console.log('Fetching activities');
    const data = await fetchFromAPI<Activity[]>('/activities');
    console.log('Fetched activities:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch activities, using initial data');
    return initialActivities;
  }
}

export async function fetchPodcasts(): Promise<Podcast[]> {
  try {
    console.log('Fetching podcasts');
    const data = await fetchFromAPI<Podcast[]>('/podcasts');
    console.log('Fetched podcasts:', data);
    return initialPodcasts;
  }
}
