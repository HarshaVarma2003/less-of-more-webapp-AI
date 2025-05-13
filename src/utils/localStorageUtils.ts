
// Function to get the next available ID in an array of objects
export const getNextId = (items: any[]) => {
  return Math.max(0, ...items.map(item => item.id)) + 1;
};

// Save to localStorage with error handling - kept for potential future use
export const saveToLocalStorage = (key: string, data: any) => {
  try {
    console.log(`Saving ${key} to localStorage:`, data);
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};
