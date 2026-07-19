import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Terms of Service — Rovicu",
  description: "The terms governing your use of the Rovicu app.",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" updated="July 17, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
        Rovicu mobile application (the &quot;App&quot;), provided by Rovicu (&quot;we&quot;,
        &quot;our&quot;, &quot;us&quot;). By creating an account or using the App, you agree to
        these Terms.
      </p>

      <section>
        <h2>1. Eligibility</h2>
        <p>
          You must be at least 13 years old to use the App. If you are under the
          age of majority in your jurisdiction, you may only use the App with the
          consent of a parent or legal guardian.
        </p>
      </section>

      <section>
        <h2>2. Your Account</h2>
        <ul>
          <li>You are responsible for maintaining the confidentiality of your login credentials</li>
          <li>You are responsible for all activity that occurs under your account</li>
          <li>You must provide accurate account information and keep it up to date</li>
          <li>We may suspend or terminate accounts that violate these Terms</li>
        </ul>
      </section>

      <section>
        <h2>3. User Content</h2>
        <p>
          The App allows you to post threads, comments, messages, match data,
          tournament information, and media (photos/videos) (&quot;User Content&quot;).
          You retain ownership of your User Content, but by posting it you grant
          Rovicu a worldwide, non-exclusive, royalty-free license to host, store,
          display, reproduce and distribute it within the App as necessary to
          operate the service.
        </p>
        <p>You agree not to post User Content that:</p>
        <ul>
          <li>Is unlawful, defamatory, harassing, hateful, or abusive</li>
          <li>Infringes someone else&apos;s intellectual property or privacy rights</li>
          <li>Contains malware or is intended to disrupt the App</li>
          <li>Impersonates another person or organization</li>
          <li>Is spam or unauthorized advertising</li>
        </ul>
        <p>We may remove User Content or suspend accounts that violate these Terms, at our discretion.</p>
      </section>

      <section>
        <h2>4. Match, Score and Tournament Data</h2>
        <p>
          Live scores, match statistics, and tournament data on the App may be
          entered by users (such as club administrators or scorers) and are provided
          &quot;as is&quot;. Rovicu does not guarantee the accuracy, completeness, or
          real-time reliability of this data, and it should not be relied upon for
          betting, wagering, or any purpose requiring guaranteed accuracy.
        </p>
      </section>

      <section>
        <h2>5. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the App for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to the App, other accounts, or our systems</li>
          <li>Interfere with or disrupt the App&apos;s infrastructure</li>
          <li>Scrape, harvest, or collect data from the App without our written permission</li>
          <li>Use automated means (bots, scripts) to access the App outside of provided APIs</li>
        </ul>
      </section>

      <section>
        <h2>6. Intellectual Property</h2>
        <p>
          The App, including its design, logos, and underlying software, is owned by
          Rovicu and protected by intellectual property laws. These Terms do not
          grant you any rights to our trademarks or branding.
        </p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>
          You may stop using the App and delete your account at any time. We may
          suspend or terminate your access to the App if you violate these Terms, or
          if we discontinue the App or a specific feature.
        </p>
      </section>

      <section>
        <h2>8. Disclaimer of Warranties</h2>
        <p>
          The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of
          any kind, whether express or implied. We do not warrant that the App will
          be uninterrupted, error-free, or completely secure.
        </p>
      </section>

      <section>
        <h2>9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Rovicu shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages arising
          out of or related to your use of the App.
        </p>
      </section>

      <section>
        <h2>10. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the App
          after changes take effect constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2>11. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India, without regard to conflict
          of law principles.
        </p>
      </section>

      <section>
        <h2>12. Contact Us</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href="mailto:contact@rovicu.com">contact@rovicu.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
