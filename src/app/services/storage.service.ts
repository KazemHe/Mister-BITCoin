


interface StorageService {
  load: (key: string) => any | null;
  // remove: (key: string) => any | null;
  store: (key: string, val: any) => void;
}

export const storageService: StorageService = {
  load,
  store,
  // remove
};  

function load(key: string): any | null {
  const val = localStorage.getItem(key);
  return (val) ? JSON.parse(val) : null;
}

// function remove(key: string): any | null {
//   const val = localStorage.removeItem(key);
//   return (val) ? JSON.parse(val) : null;
// }

function store(key: string, val: any): void {
  localStorage.setItem(key, JSON.stringify(val));
}
