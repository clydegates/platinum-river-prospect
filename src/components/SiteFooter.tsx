const SiteFooter = () => {
  return (
    <footer className="py-10 px-8 md:px-16 bg-navy border-t border-ivory/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg text-ivory/70">
          Platinum River Elite
        </div>
        <p className="font-body text-xs text-ivory/30 tracking-wide">
          © {new Date().getFullYear()} Platinum River Elite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
