import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://irhamna-radhi-web.vercel.app/"

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/"
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl
    }
}