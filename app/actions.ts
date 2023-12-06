'use server'

export const fetchAnime = async (page: number) => {
    const response = await fetch(`https://www.shikimori.one/api/animes/${page}&limit=8&order=popularity`);

    const data = await response.json();
    console.log(data);
    return data;
}