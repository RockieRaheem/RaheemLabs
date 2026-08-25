import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";

export default function NotFound() {
  return (
    <main id="main-content" className="page-shell not-found">
      <p className="eyebrow">No contest / 404</p>
      <h1 className="display display--medium">Wrong corner.</h1>
      <p className="lead">This route does not exist, but the next round is one link away.</p>
      <Link className="button button--copper" href="/">Return home <ArrowIcon /></Link>
    </main>
  );
}

