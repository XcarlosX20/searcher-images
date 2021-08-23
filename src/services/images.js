const key = "23029144-bbf61ddbe748164c72c350bf6";
let numImg = 32
export const getImages = async (keyword,actualPage) => {
   const url = await fetch(`https://pixabay.com/api/?key=${key}&q=${keyword}&per_page=${numImg}&page=${actualPage}`)
    const res = await url.json();
    return res;
}