import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Delete Your Account — Rovicu",
  description: "How to delete your Rovicu account and what happens to your data.",
};

export default function DeleteAccount() {
  return (
    <LegalLayout title="Delete Your Account" updated="August 2, 2026">
      <p>
        You can permanently delete your Rovicu account and associated data
        directly from the App at any time. Follow the steps below.
      </p>

      <section>
        <h2>How to Delete Your Account</h2>
        <ol>
          <li>Open the Rovicu app and log in to your account.</li>
          <li>Go to your <strong>Profile</strong> tab.</li>
          <li>Tap the <strong>Settings</strong> icon.</li>
          <li>Scroll down and tap <strong>Delete Account</strong>.</li>
          <li>Confirm the deletion when prompted.</li>
        </ol>
      </section>

      <section>
        <h2>What Gets Deleted</h2>
        <p>
          When you delete your account, we permanently delete or anonymize
          the following within a reasonable period:
        </p>
        <ul>
          <li>Your profile information (name, username, email, phone number, bio, avatar and cover image)</li>
          <li>Your account credentials and login access</li>
          <li>Your saved preferences and device push notification tokens</li>
        </ul>
        <p>
          Some content you posted publicly, such as threads, comments, and
          match or tournament data associated with clubs or communities you
          participated in, may remain visible but will be disassociated from
          your identity. Data may also be retained for a limited period
          where required for legal, security, or fraud-prevention purposes,
          consistent with our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>Can&apos;t Access the App?</h2>
        <p>
          If you&apos;re unable to log in or the app is unavailable to you,
          you can request account deletion by emailing us at{" "}
          <a href="mailto:contact@rovicu.com">contact@rovicu.com</a> from
          the email address associated with your account. Include your
          username or registered phone number so we can locate your account.
          We&apos;ll process the request within a reasonable period.
        </p>
      </section>
    </LegalLayout>
  );
}
