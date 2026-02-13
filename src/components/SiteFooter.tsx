const SiteFooter = () => {
  return (
    <footer className="py-10 px-6 md:px-10 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-sm text-navy">
          Platinum River Elite
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Platinum River Elite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
