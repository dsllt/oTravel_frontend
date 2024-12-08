"use client";
import { Menu, Place, Schedule } from "../../../utils/type-definitions";
import Image from "next/image";
import MenuContainer from "@ui/explore/menu-container";
import React, { useContext, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { UserContext } from "../../../context/userContext";
import { placeScheduleMock, reviewsMock } from "../../../utils/mocks";
import { Star } from "lucide-react";
import ReviewBox from "@ui/review-box";
import dynamic from "next/dynamic";
import ScheduleEditModal from "@ui/explore/schedule-edit-modal";
import { StarIcon } from "@heroicons/react/16/solid";

const Map = dynamic(
  () => import("../../../components/maps/small-map"),

  {
    loading: () => <p>Um mapa está sendo carregado</p>,
    ssr: false,
  },
);

export default function PlacePageClient({ slug }: { slug: string }) {
  const { places, favorites, menu, userData, setFavorites } =
    useContext(UserContext);
  const [place, setPlace] = useState<Place>({
    id: "",
    image_url: "",
    name: "",
    description: "",
    address: "",
    city: "",
    country: "",
    latitude: 0,
    longitude: 0,
    phone: "",
    slug: "",
    category: [],
    rating: 0,
    created_at: "",
  });
  const [isFavorite, setIsFavorite] = useState(false);
  const [placeMenu, setPlaceMenu] = useState<Menu[]>([]);
  const [placeSchedule, setPlaceSchedule] =
    useState<Schedule[]>(placeScheduleMock);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReview] = useState(reviewsMock);

  function displayScheduleModal() {
    const modal = document.getElementById("schedule-edit") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }

  const isPlaceDataFetched = (place: Place): boolean => {
    let isFetched = false;
    Object.values(place).every((value) => {
      if (typeof value === "string") {
        isFetched = value.trim() !== "";
      } else if (Array.isArray(value)) {
        isFetched = value.length > 0;
      }
    });
    return isFetched;
  };

  function handleFavorites() {
    setIsFavorite(!isFavorite);
    const newFavorite = {
      id: place.id,
      name: place.name,
      image_url: place.image_url,
      address: place.address,
      city: place.city,
      country: place.country,
      slug: place.slug,
      rating: place.rating,
    };
    setFavorites((prevState) => [...prevState, newFavorite]);
  }

  function handleSubmitReview() {
    const review = {
      id: "",
      review: newReview,
      rating: Number(rating),
      created_at: new Date().toDateString(),
      user: userData,
      place: place,
    };
    setReview((prevState) => [...prevState, review]);
    setNewReview("");
    setRating("");
  }

  useEffect(() => {
    // async function fetchData() {
    //   const placesResponse = await fetchPlace(params.placeSlug);
    //   const menuResponse = await fetchMenu(params.placeSlug);

    //   setPlace(placesResponse);
    //   setPlaceMenu(menuResponse);
    // }

    // fetchData();

    const currentPlace = places.find((place) => place.slug === slug);
    if (currentPlace) {
      const currentMenu: Menu[] = menu.filter(
        (menu) => menu.place_id === currentPlace.id,
      );
      setPlace(currentPlace);
      setPlaceMenu(currentMenu);
    }

    const isFavorite = favorites.some((favorite) => place.id === favorite.id);
    setIsFavorite(isFavorite);
  }, [slug, places, favorites, place.id, menu]);

  return (
    <div className="w-full px-40 flex flex-col gap-10 mt-10 mb-20 items-center justify-center">
      {isPlaceDataFetched(place) ? (
        <>
          <div className="flex w-full h-full justify-center items-start gap-16">
            <div className="max-h-[700px] overflow-hidden w-3/5">
              <Image
                src={place.image_url}
                alt=""
                style={{ objectFit: "cover", borderRadius: "1rem" }}
                width={600}
                height={700}
                priority
              />
            </div>
            <div className="flex flex-col gap-4 font-dmSans min-w-[500px]">
              <h1 className="text-5xl uppercase font-semibold mb-4 max-w-[500px] break-words">
                {place.name}
              </h1>
              <div className="flex justify-between">
                <div className="badge badge-secondary">{place.rating}</div>
                <div
                  className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-700 rounded-lg p-2"
                  onClick={handleFavorites}
                >
                  {isFavorite ? (
                    <StarIcon className="size-5 text-blue-600" />
                  ) : (
                    <>
                      <Star className="size-5 text-blue-600" />
                      Favoritar
                    </>
                  )}
                </div>
              </div>
              <p className="text-lg text-gray-400 mb-2">{place.address}</p>
              <div className="">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-xl font-dmSans mb-4">
                    Horários
                  </h1>
                  <button
                    className="hover:bg-slate-700 p-1 rounded-lg mb-3 text-sm"
                    onClick={() => displayScheduleModal()}
                  >
                    Editar
                  </button>
                </div>
                <ScheduleEditModal
                  placeSchedule={placeSchedule}
                  setPlaceSchedule={setPlaceSchedule}
                />
                <div className="bg-base-300 p-4 rounded-lg">
                  <div className="flex gap-8">
                    <div className="align-top w-1/2">
                      <table className="table">
                        <tbody>
                          {placeSchedule.slice(0, 4).map((day) => {
                            return (
                              <tr
                                className="hover:bg-base-100 flex justify-between"
                                key={day.week_day}
                              >
                                <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
                                  {day.week_day}
                                </td>
                                <td className="rounded-r-md py-2 px-1 whitespace-nowrap ">
                                  {day.open_time} - {day.close_time}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="align-top w-1/2">
                      <table className="table">
                        <tbody>
                          {placeSchedule.slice(4, 7).map((day) => {
                            return (
                              <tr
                                className="hover:bg-base-100 flex justify-between"
                                key={day.week_day}
                              >
                                <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
                                  {day.week_day}
                                </td>
                                <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
                                  {day.open_time} - {day.close_time}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-between gap-12">
            <div className="w-full">
              <h1 className="font-bold text-xl font-dmSans mb-4">Menu</h1>
              <MenuContainer menu={placeMenu} placeId={place.id} />
            </div>
          </div>

          <div className="flex w-full justify-between gap-12">
            <div className="w-full">
              <h1 className="font-bold text-xl font-dmSans mb-4">Mapa</h1>
              <Map place={place} />
            </div>
          </div>

          <div className="w-full">
            <h1 className="font-bold text-xl font-dmSans mb-4">Reviews</h1>
            {reviews.map((review) => {
              return <ReviewBox key={review.id} review={review} />;
            })}
            <div className="w-full flex gap-5">
              <textarea
                placeholder="Escreva sua review"
                className="w-full px-6 py-6 rounded-lg bg-gray-900 border border-base-300"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              />
              <div className="space-y-3 w-36">
                <input
                  type="number"
                  placeholder="Dê uma nota"
                  className="w-36 p-4 rounded-lg bg-gray-900 border border-base-300"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  max={5}
                />
                <button
                  className="rounded-lg bg-gray-900 p-4 w-36"
                  onClick={handleSubmitReview}
                >
                  Review
                </button>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center items-center">
            <Link href="/explore#search" className="btn btn-primary ">
              Voltar
            </Link>
          </div>
        </>
      ) : (
        <div className="w-[600px] h-[700px] flex items-center justify-center">
          Loading...
        </div>
      )}
    </div>
  );
}
