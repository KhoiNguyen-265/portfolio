import { useTranslation } from "react-i18next";

function FooterLayout() {
  const { t } = useTranslation();
  return (
    <footer className="bg-bg-body text-text2/80 p-8">
      <div className="container">
        <div className="flex flex-col items-center gap-3">
          <p>{t("footerDefaultLayout.design")}</p>
          <p>Copyright © 2025</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterLayout;
