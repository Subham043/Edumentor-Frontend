import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
  return (
    <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4 w-full">
      <SidebarTrigger />
      <div
        data-orientation="vertical"
        role="none"
        className="shrink-0 bg-border w-[1px] mr-2 h-4"
      ></div>
      <nav aria-label="breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
          <li className="items-center gap-1.5 hidden md:block">
            <a className="transition-colors hover:text-foreground" href="#">
              Building Your Application
            </a>
          </li>
          <li
            role="presentation"
            aria-hidden="true"
            className="[&amp;>svg]:w-3.5 [&amp;>svg]:h-3.5 hidden md:block"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
          <li className="inline-flex items-center gap-1.5">
            <span
              role="link"
              aria-disabled="true"
              aria-current="page"
              className="font-normal text-foreground"
            >
              Data Fetching
            </span>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
