import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "/api",
});

export const getArticles = async (params = {}) => {
  console.log("Making API request to /articles with params:", params);
  try {
    const res = await API.get("/articles", { params });
    console.log("API response:", res.data);
    return res.data;
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
};

export const getArticle = async (uuid) => {
  const res = await API.get(`/articles/${uuid}`);
  return res.data;
};

export const updateArticle = async (uuid, data) => {
  const res = await API.put(`/articles/${uuid}`, data);
  return res.data;
};

export const deleteArticle = async (uuid) => {
  const res = await API.delete(`/articles/${uuid}`);
  return res.data;
};

export const bulkDeleteArticles = async (uuids) => {
  const res = await API.post("/articles/bulk-delete", { uuids });
  return res.data;
};

export const bulkEditArticles = async (uuids, updates) => {
  const res = await API.post("/articles/bulk-edit", { uuids, updates });
  return res.data;
};

export const triggerScrape = async (sourceName) => {
  const res = await API.post(`/system/scrape?source=${sourceName}`);
  return res.data;
};

export const processWithAI = async (sourceName) => {
  const res = await API.post(`/system/process-ai?source=${sourceName}`);
  return res.data;
};

export const publishShopify = async (sourceName) => {
  const url = sourceName ? `/system/publish-shopify?source=${sourceName}` : "/system/publish-shopify";
  const res = await API.post(url);
  return res.data;
};

export const pushArticleToShopify = async (uuid) => {
  const res = await API.post(`/system/push-to-shopify/${uuid}`);
  return res.data;
};

export const editArticleOnShopify = async (uuid, data) => {
  const res = await API.put(`/system/edit-on-shopify/${uuid}`, data);
  return res.data;
};

export const processSingleArticleWithAI = async (uuid) => {
  const res = await API.post(`/system/process-single-ai/${uuid}`);
  return res.data;
};

export const getScrapers = async () => {
  const res = await API.get("/system/scrapers");
  return res.data.scrapers;
};

export const createScraper = async (data) => {
  const res = await API.post("/system/scrapers", data);
  return res.data;
};