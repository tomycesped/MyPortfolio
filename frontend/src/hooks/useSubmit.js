import { useState } from "react";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await res.json();
      setResponse(result);
      return result;
    } catch (error) {
      console.error("Error in request:", error);
      const errorResponse = { type: "error", message: "Something went wrong, please try again later!" };
      setResponse(errorResponse);
      return errorResponse;
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
