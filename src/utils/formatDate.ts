export default function formatDate(dateString: string) {
  const date = new Date(dateString);

  // Removes unnecessary miliseconds from timestamp, could be improved
  return date.toISOString().split('.')[0] + 'Z';
}
