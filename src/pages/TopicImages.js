import Topics from "../components/Topics";
import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import topicsBg from "../mock/topicsBg";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Gallery from "../components/Gallery";
import InfiniteScroll from "react-infinite-scroll-component";
export default function TopicImages() {
  const { t } = useTranslation(["common", "topicsdesc"]);

  const [currentTopic, setCurrentTopic] = useState();
  const [topicPhotos, setTopicPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const topicsBackground = topicsBg;
  const { topicSlug } = useParams("topicSlug");
  const apiRoot = "https://api.unsplash.com";
  const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${apiRoot}/topics/${topicSlug}?client_id=${accessKey}&per_page=22`)
      .then((response) => {
        setCurrentTopic(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    fetchImages();
  }, [topicSlug]);

  function fetchImages() {
    axios
      .get(
        `${apiRoot}/topics/${topicSlug}/photos?client_id=${accessKey}&page=1&per_page=30`
      )
      .then((response) => {
        setTopicPhotos(response.data);
        setPage(2);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchMore(page = 2) {
    axios
      .get(
        `${apiRoot}/topics/${topicSlug}/photos?client_id=${accessKey}&page=${page}&per_page=30`
      )
      .then((response) => {
        setTopicPhotos([...topicPhotos, ...response.data]);
        setPage(page + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <MainLayout />
      <Topics current={topicSlug} />
      <div className="md:mt-28 md:pt-4 pb-10">
        <div
          style={{
            backgroundImage: `url(${topicsBackground[topicSlug]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className=" flex items-start  px-10 flex-col  w-full xs:h-[400px]  lg:h-[600px] bg-cover dark:bg-black bg-white"
        >
          <p className="xs:text-3xl xs:pt-20 md:mt-10 xl:mt-20 sm:text-4xl md:text-5xl font-bold text-white ">
            {currentTopic && t(`topic.${currentTopic.slug}`)}
          </p>
          <p className="xs:text-md mt-4 sm:text-xl py-3 text-white bg-black bg-opacity-40 rounded-md px-4 text-shadow-md  ">
            {currentTopic && t(`${topicSlug}`, { ns: "topicsdesc" })}
          </p>
        </div>
        <div className="w-full   dark:bg-black bg-white">
          <InfiniteScroll
            dataLength={topicPhotos && topicPhotos.length}
            next={() => fetchMore(page)}
            hasMore={page <= 10 ? true : false}
            loader={<Loading />}
          >
            <Gallery images={topicPhotos} />
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
