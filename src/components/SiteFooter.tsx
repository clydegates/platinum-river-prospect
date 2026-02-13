const SiteFooter = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif text-sm text-muted-foreground">
          Platinum River <span className="text-gold">Elite</span>
        </div>
        <p className="font-body text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Platinum River Elite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
