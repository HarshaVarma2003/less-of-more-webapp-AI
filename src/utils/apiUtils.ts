
import { Fellowship, Activity, Podcast } from '../types/admin';
import { getLocalStorageItem } from './localStorageUtils';

// Base URL for API requests - would point to your CMS API endpoint
const API_BASE_URL = '/api';

// Generic fetch function that simulates API requests but actually gets data from localStorage
async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  try {
    console.log(`Fetching data from ${endpoint}`);
    
    // Determine which data to return based on the endpoint
    if (endpoint.includes('fellowships')) {
      if (endpoint.includes('/')) {
        // Single fellowship request
        const id = Number(endpoint.split('/').pop());
        console.log(`Fetching fellowship with id: ${id}`);
        
        // Get all fellowships and find the one with matching id
        const fellowships = getLocalStorageItem<Fellowship[]>('lom_fellowships') || [];
        const fellowship = fellowships.find(f => f.id === id) || null;
        console.log('Fetched fellowship:', fellowship);
        
        return fellowship as unknown as T;
      }
      
      // All fellowships request
      console.log('Fetching all fellowships from localStorage');
      const fellowships = getLocalStorageItem<Fellowship[]>('lom_fellowships') || [];
      console.log('Fetched fellowships:', fellowships);
      
      return fellowships as unknown as T;
    } 
    else if (endpoint.includes('activities')) {
      console.log('Fetching all activities from localStorage');
      const activities = getLocalStorageItem<Activity[]>('lom_activities') || [];
      console.log('Fetched activities:', activities);
      
      return activities as unknown as T;
    } 
    else if (endpoint.includes('podcasts')) {
      console.log('Fetching all podcasts from localStorage');
      const podcasts = getLocalStorageItem<Podcast[]>('lom_podcasts') || [];
      console.log('Fetched podcasts:', podcasts);
      
      return podcasts as unknown as T;
    }
    
    // If no match, throw error
    throw new Error(`API endpoint not found: ${endpoint}`);
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
}

// Specialized fetch functions for different content types
export async function fetchFellowships(): Promise<Fellowship[]> {
  try {
    console.log('Fetching fellowships from localStorage');
    const data = await fetchFromAPI<Fellowship[]>('/fellowships');
    console.log('Fetched fellowships:', data);
    return data || []; // Return empty array if no data
  } catch (error) {
    console.error('Failed to fetch fellowships:', error);
    throw error; // Let the component handle the error
  }
}

export async function fetchFellowshipById(id: number): Promise<Fellowship | null> {
  try {
    console.log(`Fetching fellowship with ID ${id} from localStorage`);
    const data = await fetchFromAPI<Fellowship | null>(`/fellowships/${id}`);
    console.log('Fetched fellowship:', data);
    return data; // Return null if fellowship not found
  } catch (error) {
    console.error(`Failed to fetch fellowship with ID ${id}:`, error);
    throw error; // Let the component handle the error
  }
}

export async function fetchActivities(): Promise<Activity[]> {
  try {
    console.log('Fetching activities from localStorage');
    const data = await fetchFromAPI<Activity[]>('/activities');
    console.log('Fetched activities:', data);
    return data || []; // Return empty array if no data
  } catch (error) {
    console.error('Failed to fetch activities:', error);
    throw error; // Let the component handle the error
  }
}

export async function fetchPodcasts(): Promise<Podcast[]> {
  try {
    console.log('Fetching podcasts from localStorage');
    const data = await fetchFromAPI<Podcast[]>('/podcasts');
    console.log('Fetched podcasts:', data);
    return data || []; // Return empty array if no data
  } catch (error) {
    console.error('Failed to fetch podcasts:', error);
    throw error; // Let the component handle the error
  }
}
