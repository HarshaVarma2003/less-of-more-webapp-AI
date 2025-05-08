
import { Fellowship, Activity, Podcast } from '../types/admin';

// Base URL for API requests - would point to your CMS API endpoint
const API_BASE_URL = '/api';

// Generic fetch function with error handling
async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  try {
    console.log(`Fetching data from ${endpoint}`);
    
    // In a production environment, this would fetch from your actual CMS API
    // For now, we'll simulate API responses without fallback data
    
    // This is where your real API call would happen:
    // const response = await fetch(`${API_BASE_URL}${endpoint}`);
    // if (!response.ok) {
    //   throw new Error(`API error: ${response.status}`);
    // }
    // return await response.json();
    
    // For demonstration, we're simulating empty API responses
    // In a real implementation, this should connect to your actual CMS
    if (endpoint.includes('fellowships')) {
      if (endpoint.includes('/')) {
        // Single fellowship request
        const id = Number(endpoint.split('/').pop());
        console.log(`Fetching fellowship with id: ${id}`);
        // Return null to indicate no data found - in production this would fetch from CMS
        return null as T;
      }
      // All fellowships request
      console.log('Fetching all fellowships from CMS API');
      // Return empty array - in production this would fetch from CMS
      return [] as unknown as T;
    } else if (endpoint.includes('activities')) {
      console.log('Fetching all activities from CMS API');
      // Return empty array - in production this would fetch from CMS
      return [] as unknown as T;
    } else if (endpoint.includes('podcasts')) {
      console.log('Fetching all podcasts from CMS API');
      // Return empty array - in production this would fetch from CMS
      return [] as unknown as T;
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
    console.log('Fetching fellowships from CMS');
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
    console.log(`Fetching fellowship with ID ${id} from CMS`);
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
    console.log('Fetching activities from CMS');
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
    console.log('Fetching podcasts from CMS');
    const data = await fetchFromAPI<Podcast[]>('/podcasts');
    console.log('Fetched podcasts:', data);
    return data || []; // Return empty array if no data
  } catch (error) {
    console.error('Failed to fetch podcasts:', error);
    throw error; // Let the component handle the error
  }
}
