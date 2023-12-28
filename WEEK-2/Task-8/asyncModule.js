//asyncModule.js
export async function fetchDataAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from Async Module");
      }, 3000);
    });
  }