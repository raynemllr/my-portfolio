import PersonalLinks from "./PersonalLinks";

function Footer() {
  return (
    <footer className="footer">
      <div className="flex w-[95%] flex-col items-center justify-between gap-y-6 md:w-2/3 md:flex-row">
        <h3 className="text-center text-lg font-extrabold">
          © 2023 Rayne Mallari. All rights reserved.
        </h3>

        <div className="flex gap-x-5 md:gap-x-8">
          <PersonalLinks />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
