
import { Fellowship, Activity, Podcast } from '../types/admin';
import { initialFellowships, initialActivities, initialPodcasts } from '../data/initialData';

// Fetch functions that return static data instead of using localStorage

export async function fetchFellowships(): Promise<Fellowship[]> {
  try {
    console.log('Fetching fellowships from static data');
    return initialFellowships;
  } catch (error) {
    console.error('Failed to fetch fellowships:', error);
    throw error;
  }
}

export async function fetchFellowshipById(id: number): Promise<Fellowship | null> {
  try {
    console.log(`Fetching fellowship with ID ${id} from static data`);
    const fellowship = initialFellowships.find(f => f.id === id) || null;
    return fellowship;
  } catch (error) {
    console.error(`Failed to fetch fellowship with ID ${id}:`, error);
    throw error;
  }
}

export async function fetchActivities(): Promise<Activity[]> {
  try {
    console.log('Fetching activities from static data');
    return initialActivities;
  } catch (error) {
    console.error('Failed to fetch activities:', error);
    throw error;
  }
}

export async function fetchPodcasts(): Promise<Podcast[]> {
  try {
    console.log('Fetching podcasts from static data');
    return initialPodcasts;
  } catch (error) {
    console.error('Failed to fetch podcasts:', error);
    throw error;
  }
}
