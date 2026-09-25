type FooterProps = {
  year: number;
  author: string;
};

export const Footer = ({ year, author }: FooterProps) => {
  return (
    <footer className="footer">
      <p>&copy; {year} {author}. All rights reserved.</p>
    </footer>
  );
};