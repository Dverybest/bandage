export const objectToQueryString = (
  parameters: {
    [key: string]: string | number;
  } = {}
) => {
  const searchParams = new URLSearchParams();
  for (const key in parameters) {
    if (parameters[key] !== "") {
      searchParams.append(key, encodeURIComponent(parameters[key]));
    }
  }
  return searchParams.toString();
};
