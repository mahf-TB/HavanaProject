import { NextResponse } from "next/server";

export const middleware = (req) => {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  const token = req.cookies.get("token")?.value;
  const role = req.cookies.get("role")?.value;

  // Si l'utilisateur n'est pas authentifié
  if (!token) {
    // Autoriser l'accès à la page de login
    if (pathname === "/login") {
      return NextResponse.next();
    }
    // Rediriger vers /login si l'utilisateur essaie d'accéder à d'autres pages
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Si l'utilisateur est authentifié et essaie d'accéder à /login
  if (token && pathname === "/login") {
    if (role === "admin") {
      url.pathname = "/admin/home/dashboard";
    } else if (role === "user") {
      url.pathname = "/user/home";
    } else {
      // Rediriger vers une page par défaut si le rôle est inconnu
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    return NextResponse.redirect(url);
  }

  // Protéger les routes /admin
  if (pathname.startsWith("/admin")) {
    if (role !== "admin") {
      url.pathname = "/user/home";
      return NextResponse.redirect(url);
    }
  }

  // Protéger les routes /user
  if (pathname.startsWith("/user")) {
    if (role !== "user") {
      url.pathname = "/admin/home/dashboard";
      return NextResponse.redirect(url);
    }
  }

  // Autoriser l'accès si aucune condition précédente n'est satisfaite
  return NextResponse.next();
};

export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/login", "/"],
};
