export const formatDate = (dateString:Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Adjust locale and options as needed
  };