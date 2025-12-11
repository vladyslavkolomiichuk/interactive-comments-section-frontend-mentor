export const timeAgo = (dateInput) => {
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) {
    return dateInput;
  }

  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) {
    return 'Just now';
  }
  if (secondsPast < 3600) {
    const mins = Math.floor(secondsPast / 60);
    return `${mins} minute${mins > 1 ? 's' : ''} ago`;
  }
  if (secondsPast <= 86400) {
    const hours = Math.floor(secondsPast / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 604800) {
    const days = Math.floor(secondsPast / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 2592000) {
    const weeks = Math.floor(secondsPast / 604800);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 31536000) {
    const months = Math.floor(secondsPast / 2592000);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }

  const years = Math.floor(secondsPast / 31536000);
  return `${years} year${years > 1 ? 's' : ''} ago`;
};
