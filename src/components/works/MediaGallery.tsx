"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  urls: string[];
}

function isVideo(url: string) {
  return /\.(mp4|webm|mov)$/i.test(url);
}

function isYoutube(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function isBilibili(url: string) {
  return url.includes("bilibili.com");
}

function isVimeo(url: string) {
  return url.includes("vimeo.com");
}

function getYoutubeId(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
  return match?.[1] ?? "";
}

function getBilibiliId(url: string) {
  const match = url.match(/BV[\w]+/);
  return match?.[0] ?? "";
}

function getVimeoId(url: string) {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match?.[1] ?? "";
}

export default function MediaGallery({ urls }: Props) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (urls.length === 0) return null;

  return (
    <>
      <div className="mt-12 space-y-4">
        {urls.map((url, i) => {
          if (isYoutube(url)) {
            const id = getYoutubeId(url);
            return (
              <div key={i} className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            );
          }
          if (isBilibili(url)) {
            const id = getBilibiliId(url);
            return (
              <div key={i} className="aspect-video w-full">
                <iframe
                  src={`https://player.bilibili.com/player.html?bvid=${id}&autoplay=0`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            );
          }
          if (isVimeo(url)) {
            const id = getVimeoId(url);
            return (
              <div key={i} className="aspect-video w-full">
                <iframe
                  src={`https://player.vimeo.com/video/${id}`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            );
          }
          if (isVideo(url)) {
            return (
              <video key={i} src={url} controls className="w-full" />
            );
          }
          // 图片
          return (
            <div
              key={i}
              className="relative w-full cursor-zoom-in"
              onClick={() => setLightbox(url)}
            >
              <Image
                src={url}
                alt={`media-${i}`}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={lightbox}
            alt="preview"
            width={1600}
            height={1200}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
}
