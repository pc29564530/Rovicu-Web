import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — Rovicu",
  description: "How Rovicu collects, uses and protects your data.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 17, 2026">
      <p>
        Rovicu (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the Rovicu mobile
        application (the &quot;App&quot;), a sports social platform for cricket, football
        and badminton. This Privacy Policy explains what information we collect,
        how we use it, and the choices you have.
      </p>
      <p>
        By using the App, you agree to the collection and use of information in
        accordance with this policy.
      </p>

      <section>
        <h2>1. Information We Collect</h2>
        <p><strong>Account information.</strong> When you sign up, we collect your name, username, email address, phone number, and profile details (bio, avatar, cover image) that you choose to add. You may sign in directly or via Google Sign-In.</p>
        <p><strong>Content you create.</strong> Threads, comments, messages, community posts, match data, tournament and club information, and any photos or videos you upload.</p>
        <p><strong>Location data.</strong> With your permission, we access approximate or precise device location to support location-based features (such as finding nearby clubs, tournaments, or matches). You can disable location access at any time in your device settings.</p>
        <p><strong>Messages.</strong> Direct and group messages sent through the App are transmitted over our real-time messaging service to deliver them to recipients.</p>
        <p><strong>Device and usage data.</strong> Device type, operating system, app version, crash logs and diagnostic data, collected automatically to help us fix bugs and improve stability.</p>
        <p><strong>Push notification tokens.</strong> If you enable notifications, we use Firebase Cloud Messaging to deliver alerts about matches, messages, and activity relevant to you.</p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To create and manage your account and profile</li>
          <li>To operate core features: live scoring, tournaments, clubs, threads, communities and messaging</li>
          <li>To show you relevant content, such as nearby matches or communities</li>
          <li>To send push notifications you&apos;ve opted into</li>
          <li>To detect, diagnose and fix bugs or crashes</li>
          <li>To keep the App secure and prevent abuse</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Share Information</h2>
        <p>We do not sell your personal information. We share data only in these cases:</p>
        <ul>
          <li><strong>With other users, as intended by the feature.</strong> Your profile, threads, comments and public match/tournament activity are visible to other users per the App&apos;s normal social features.</li>
          <li><strong>Service providers.</strong> We use third-party infrastructure providers to operate the App, including cloud storage for uploaded media, Firebase (Google) for push notifications and sign-in, and Sentry for crash/error monitoring. These providers process data on our behalf and are bound by their own privacy and security obligations.</li>
          <li><strong>Legal requirements.</strong> If required by law, regulation, or legal process, or to protect the rights, safety, or property of Rovicu, our users, or the public.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Retention</h2>
        <p>
          We retain your account information and content for as long as your account
          is active. If you delete your account, we delete or anonymize your personal
          data within a reasonable period, except where retention is required for
          legal, security, or fraud-prevention purposes.
        </p>
      </section>

      <section>
        <h2>5. Your Choices and Rights</h2>
        <ul>
          <li>You can edit or delete your profile information at any time within the App</li>
          <li>You can disable location access and push notifications in your device settings</li>
          <li>You can request deletion of your account and associated data by contacting us</li>
          <li>You can request a copy of the personal data we hold about you</li>
        </ul>
      </section>

      <section>
        <h2>6. Children&apos;s Privacy</h2>
        <p>
          The App is not directed to children under 13, and we do not knowingly
          collect personal information from children under 13. If you believe a
          child has provided us with personal information, please contact us and we
          will take steps to delete it.
        </p>
      </section>

      <section>
        <h2>7. Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect your
          data, including encrypted network transport and secure credential storage
          on-device. No method of transmission or storage is 100% secure, and we
          cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of
          material changes by updating the &quot;Last updated&quot; date above, and where
          appropriate, through an in-app notice.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or want to exercise your
          data rights, contact us at{" "}
          <a href="mailto:contact@rovicu.com">contact@rovicu.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
