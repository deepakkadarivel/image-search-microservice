import fetch from "node-fetch";

const getGallery = (req, res) => {

    let sort = req.body.sortFilter ? req.body.sortFilter : 'viral';
    let section = req.body.sectionFilter ? req.body.sectionFilter : 'hot';
    let window = req.body.windowFilter ? req.body.windowFilter : 'day';
    let viral = req.body.viralFilter ? req.body.viralFilter : false;

    const url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/1?showViral=${viral}&mature=false&album_previews=true`;
    const IMGUR_API_CLIENT = "1b328023e9ce933";

    fetch(url, {headers: {Authorization: `Client-ID ${IMGUR_API_CLIENT}`}})
        .then(resp => resp.json())
        .then(json => {
            res.status(200).json({
                data: json.data
            });
        });
};

export default getGallery;