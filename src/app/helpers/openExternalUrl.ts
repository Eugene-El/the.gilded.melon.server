export default function openExternalUrl(url: string)
{
  const newWindow = window.open(url, '_blank');
  if (newWindow !== undefined && newWindow !== null) {
    newWindow.focus();
  } else {
    window.location.href = url;
  }
}