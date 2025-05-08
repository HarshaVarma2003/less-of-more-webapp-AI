
import { Fellowship, Activity, Podcast } from '../types/admin';
import { initialFellowships, initialActivities, initialPodcasts } from '../data/initialData';

// Base URL for API requests - would point to your CMS API endpoint
const API_BASE_URL = '/api';

// Generic fetch function with error handling
async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  try {
    console.log(`Fetching data from ${endpoint}`);
    
    // In a production environment, this would fetch from your actual CMS API
    // For example: const response = await fetch(`${API_BASE_URL}${endpoint}`);
    // return await response.json();
    
    // For demonstration, we're simulating API calls
    // In a real implementation, this would be replaced with actual API calls
    if (endpoint.includes('fellowships')) {
      if (endpoint.includes('/')) {
        // Single fellowship request
        const id = Number(endpoint.split('/').pop());
        // This would be an API call to get a specific fellowship by ID
        console.log(`Fetching fellowship with id: ${id}`);
        const fellowship = initialFellowships.find((f: Fellowship) => f.id === id);
        if (!fellowship) throw new Error(`Fellowship with ID ${id} not found`);
        return fellowship as T;
      }
      // All fellowships request
      console.log('Fetching all fellowships from API');
      return initialFellowships as T;
    } else if (endpoint.includes('activities')) {
      console.log('Fetching all activities from API');
      return initialActivities as T;
    } else if (endpoint.includes('podcasts')) {
      console.log('Fetching all podcasts from API');
      return initialPodcasts as T;
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
    return data;
  } catch (error) {
    console.error('Failed to fetch fellowships:', error);
    // In a production app, you might want to show an error to the user instead
    return [];
  }
}

export async function fetchFellowshipById(id: number): Promise<Fellowship | null> {
  try {
    console.log(`Fetching fellowship with ID ${id} from CMS`);
    const data = await fetchFromAPI<Fellowship>(`/fellowships/${id}`);
    console.log('Fetched fellowship:', data);
    return data;
  } catch (error) {
    console.error(`Failed to fetch fellowship with ID ${id}:`, error);
    // In a production app, you might want to show an error to the user instead
    return null;
  }
}

export async function fetchActivities(): Promise<Activity[]> {
  try {
    console.log('Fetching activities from CMS');
    const data = await fetchFromAPI<Activity[]>('/activities');
    console.log('Fetched activities:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch activities:', error);
    // In a production app, you might want to show an error to the user instead
    return [];
  }
}

export async function fetchPodcasts(): Promise<Podcast[]> {
  try {
    console.log('Fetching podcasts from CMS');
    const data = await fetchFromAPI<Podcast[]>('/podcasts');
    console.log('Fetched podcasts:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch podcasts:', error);
    // In a production app, you might want to show an error to the user instead
    return [];
  }
}
