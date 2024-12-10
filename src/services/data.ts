import { CreatePlaceDTO, UpdatePlaceDTO } from "../utils/type-definitions";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function register(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) {
  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
  });
  try {
    const response = await fetch(`${baseUrl}/api/v1/auth/register`, {
      cache: "no-store",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Failed to register.", e);
  }
}
export async function login(email: string, password: string) {
  const body = JSON.stringify({
    email,
    password,
  });
  try {
    const response = await fetch(`${baseUrl}/api/v1/auth`, {
      cache: "no-store",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Failed to login.", e);
  }
}

export async function getPlaces() {
  try {
    const response = await fetch(`${baseUrl}/api/v1/place`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Failed to fetch places data.", e);
    throw new Error("Failed to fetch places data.");
  }
}

export async function fetchPlace(placeId: string) {
  try {
    const data = await fetch(`${baseUrl}/places/${placeId}`, {
      cache: "no-store",
    });

    return data.json();
  } catch (e) {
    console.error("Failed to fetch place data.", e);
    throw new Error("Failed to fetch place data.");
  }
}

export async function fetchMenu(placeId: string) {
  try {
    const data = await fetch(`${baseUrl}/menus/place/${placeId}`, {
      cache: "no-store",
    });

    return data.json();
  } catch (e) {
    console.error("Failed to fetch place data.", e);
    throw new Error("Failed to fetch place data.");
  }
}

export async function postPlace(data: CreatePlaceDTO) {
  const token = localStorage.getItem("token");
  try {
    await fetch(`${baseUrl}/api/v1/place`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error("Failed to create place.", err);
  }
}

export async function fetchUpdatePlace(data: UpdatePlaceDTO, id: string) {
  try {
    await fetch(
      `https://65a2bb8542ecd7d7f0a825df.mockapi.io/api/v1/places/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        cache: "no-cache",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      },
    );
  } catch (err) {
    console.error("Failed to update place.", err);
  }
}
