export const formatDate = (dateString: any) => {
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
  };