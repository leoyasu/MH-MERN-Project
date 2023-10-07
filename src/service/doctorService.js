export const GetDoctors = async () => {
    try {
      const request = await fetch("http://localhost:4000/api/doctors");
      if (!request.ok) {
        throw new Error(`Error fetching data: ${request.statusText}`);
      }
      const data = await request.json();
      return data.doctor;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  };