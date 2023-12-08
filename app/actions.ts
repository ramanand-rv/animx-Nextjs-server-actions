'use server'

export const fetchAnime = async () => {
    // const response = await fetch(`https://shikimori.one/animes/page/${page}?order=popularity`);
    const response = await fetch('https://shikimori.one/animes/page/4?order=popularity');

    const data = await response.json();
    return data;
}