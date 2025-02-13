'use client';
import Image from 'next/image';
import MenuContainer from '@ui/explore/menu-container';
import React, { Suspense, useContext, useEffect } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import ReviewBox from '@ui/review-box';
import dynamic from 'next/dynamic';
import ScheduleEditModal from '@ui/explore/schedule-edit-modal';
import { StarIcon } from '@heroicons/react/16/solid';
import usePlacePage from '../../../containers/usePlacePage';
import useNavbar from '../../../containers/useNavbar';

const Map = dynamic(
  () => import('../../../components/maps/small-map'),

  {
    loading: () => <p>Um mapa está sendo carregado</p>,
    ssr: false,
  },
);

export default function PlacePageClient({ slug }: { slug: string }) {
  return (
    <Suspense>
      <PlacePage slug={slug} />
    </Suspense>
  );
}

function PlacePage({ slug }: { slug: string }) {
  const { data, callback } = usePlacePage();
  const { data: dataNavbar } = useNavbar();

  useEffect(() => {
    callback.defineCurrentPlace(slug);
  }, [callback, slug]);

  return (
    <div className="w-full px-40 flex flex-col gap-10 mt-10 mb-20 items-center justify-center">
      {callback.isPlaceDataFetched(data.place) ? (
        <>
          <div className="flex w-full h-full justify-center items-start gap-16">
            <div className="max-h-[700px] overflow-hidden w-3/5">
              <Image
                src={data.place.imageUrl}
                alt={data.place.name}
                style={{ objectFit: 'cover', borderRadius: '1rem' }}
                width={600}
                height={700}
                priority
              />
            </div>
            <div className="flex flex-col gap-4 font-dmSans min-w-[500px]">
              <h1 className="text-5xl uppercase font-semibold mb-4 max-w-[500px] break-words">
                {data.place.name}
              </h1>
              <div className="flex justify-between">
                <div className="badge badge-secondary">{data.place.rating}</div>
                {dataNavbar.isLogged && (
                  <div
                    className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-700 rounded-lg p-2"
                    onClick={callback.onClickFavorite}
                  >
                    {data.isFavorite ? (
                      <StarIcon className="size-5 text-blue-600" />
                    ) : (
                      <>
                        <Star className="size-5 text-blue-600" />
                        Favoritar
                      </>
                    )}
                  </div>
                )}
              </div>
              <p className="text-lg text-gray-400 mb-2">{data.place.address}</p>
              <div className="">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-xl font-dmSans mb-4">
                    Horários
                  </h1>
                  <button
                    className="hover:bg-slate-700 p-1 rounded-lg mb-3 text-sm"
                    onClick={() => callback.displayScheduleModal()}
                  >
                    Editar
                  </button>
                </div>
                <ScheduleEditModal
                  placeSchedule={data.placeSchedule}
                  setPlaceSchedule={callback.setPlaceSchedule}
                />
                <div className="bg-base-300 p-4 rounded-lg">
                  <div className="flex gap-8">
                    <div className="align-top w-1/2">
                      <table className="table">
                        <tbody>
                          {data.placeSchedule.slice(0, 4).map((day) => {
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
                          {data.placeSchedule.slice(4, 7).map((day) => {
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
              <MenuContainer menu={data.placeMenu} placeId={data.place.id} />
            </div>
          </div>

          <div className="flex w-full justify-between gap-12">
            <div className="w-full">
              <h1 className="font-bold text-xl font-dmSans mb-4">Mapa</h1>
              <Map place={data.place} />
            </div>
          </div>

          <div className="w-full">
            <h1 className="font-bold text-xl font-dmSans mb-4">Reviews</h1>
            {data.reviews.map((review) => {
              return <ReviewBox key={review.id} review={review} />;
            })}
            <div className="w-full flex gap-5">
              <textarea
                placeholder="Escreva sua review"
                className="w-full px-6 py-6 rounded-lg bg-gray-900 border border-base-300"
                value={data.newReview}
                onChange={(e) => callback.setNewReview(e.target.value)}
              />
              <div className="space-y-3 w-36">
                <input
                  type="number"
                  placeholder="Dê uma nota"
                  className="w-36 p-4 rounded-lg bg-gray-900 border border-base-300"
                  value={data.rating}
                  onChange={(e) => callback.setRating(e.target.value)}
                  max={5}
                />
                <button
                  className="rounded-lg bg-gray-900 p-4 w-36"
                  onClick={callback.onClickSubmitReview}
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
