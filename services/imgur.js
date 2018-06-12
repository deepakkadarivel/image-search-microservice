import fetch from "node-fetch";

const getGallery = (req, res) => {

    const term = "lolcat";
    const url = `https://api.imgur.com/3/gallery/search/top/1/?q=${term}`;
    const IMGUR_API_CLIENT = "###########";

    fetch(url, {headers: {Authorization: `Client-ID ${IMGUR_API_CLIENT}`}})
        .then(resp => resp.json())
        .then(json => {
            res.status(200).json({
                data: json.data
            });
        });
};

export default getGallery;