import axios from 'axios';
import React from 'react'

const Apiservice = () => {
    const projectApi = async () => {
        let apiURL =
            "https://thietkeinandep.annk.info/api/wp-json/wp/v2/project?acf_format=standard&_fields=id,slug,content,link,title,acf";
        return await axios.get(apiURL)
    }

    const infoApi = async () => {
        let apiURL =
            "https://thietkeinandep.annk.info/api/wp-json/wp/v2/info?acf_format=standard&_fields=id,slug,content,link,title,acf";
        return await axios.get(apiURL)
    }

    const serviceApi = async () => {
        let apiURL =
            "https://thietkeinandep.annk.info/api/wp-json/wp/v2/services?acf_format=standard&_fields=id,slug,content,link,title,acf";
        return await axios.get(apiURL)
    }

    const newsApi = async () => {
        let apiURL =
            "https://thietkeinandep.annk.info/api/wp-json/wp/v2/posts?_fields=id,content,link,title,acf,excerpt,slug&slug";
        return await axios.get(apiURL)
    }
    const getOneBannerApi = async (bannerId) => {
        let apiURL =
            `https://thietkeinandep.annk.info/api/wp-json/wp/v2/media/${bannerId}?_fields=link`;
        return await axios.get(apiURL)
    }
    return {
        projectApi, infoApi, serviceApi, newsApi, getOneBannerApi
    }
}

export default Apiservice