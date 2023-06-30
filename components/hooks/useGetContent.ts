export default function getContent(elementID: string) {
  const element = document.querySelector(elementID);

  if (element) {
    const content = element.textContent;
    return content;
  } else {
    return null;
  }
}
