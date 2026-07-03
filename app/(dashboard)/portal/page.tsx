import Link from "next/link";
import { DashboardLayout } from "../../components/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout activeItem="Dashboard">
      {/* Welcome Banner */}
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg border border-border-gray bg-white p-8 md:flex-row md:items-center">
        <div>
          <h2 className="mb-2 text-2xl text-navy">Welcome back, Yubraj</h2>
          <p className="text-sm text-gray-500">
            <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-success-text">
              Corporate Member
            </span>{" "}
            Active
          </p>
        </div>
        <div className="text-left md:text-right">
          <div className="text-sm text-gray-500">Member since Jan 2020</div>
          <div className="text-sm text-gray-500">Renewal Jan 2026</div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-4">
        {[
          { label: "Events Registered", value: "12" },
          { label: "Directory Views", value: "847" },
          { label: "Notifications", value: "5" },
          { label: "Days Remaining", value: "218" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border-gray bg-white p-6"
          >
            <div className="mb-2 text-xs uppercase tracking-wide text-gray-500">
              {stat.label}
            </div>
            <div className="font-heading text-2xl font-bold text-navy">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Row 1 */}
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        {/* Upcoming Events */}
        <div className="overflow-hidden rounded-lg border border-border-gray bg-white">
          <div className="flex items-center justify-between border-b border-border-gray px-6 py-5">
            <h3 className="text-base font-semibold text-navy">Upcoming Events</h3>
            <Link
              href="/events/indo-nepal-trade-festival"
              className="rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              View All
            </Link>
          </div>
          <div className="p-6">
            {[
              {
                title: "Nepal Festival 2026",
                meta: "Mar 15, 2026 · PHD House, New Delhi",
              },
              {
                title: "Trade Summit 2026",
                meta: "Apr 20, 2026 · ECCI Headquarters",
              },
            ].map((event) => (
              <div
                key={event.title}
                className="flex items-center justify-between gap-4 border-b border-gray-200 py-3 last:border-b-0"
              >
                <div>
                  <div className="text-sm font-medium text-navy">
                    {event.title}
                  </div>
                  <div className="text-xs text-gray-500">{event.meta}</div>
                </div>
                <Link
                  href="/events/indo-nepal-trade-festival-2027"
                  className="rounded-md bg-crimson px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-crimson-dark"
                >
                  Register
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="overflow-hidden rounded-lg border border-border-gray bg-white">
          <div className="flex items-center justify-between border-b border-border-gray px-6 py-5">
            <h3 className="text-base font-semibold text-navy">Notifications</h3>
            <Link
              href="/portal/notifications"
              className="rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              View All
            </Link>
          </div>
          <div>
            {[
              {
                title: "AGM Notice: Annual General Meeting 2026",
                meta: "2 hours ago",
                unread: true,
              },
              {
                title: "Your membership renewal is due in 30 days",
                meta: "1 day ago",
                unread: true,
              },
              {
                title: "Welcome to the new ECCI member portal",
                meta: "3 days ago",
                unread: false,
              },
            ].map((note) => (
              <div
                key={note.title}
                className="flex items-start gap-3 border-b border-gray-200 px-6 py-3 last:border-b-0"
              >
                <span
                  className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${
                    note.unread ? "bg-crimson" : "bg-gray-300"
                  }`}
                />
                <div>
                  <div className="text-sm font-medium text-navy">
                    {note.title}
                  </div>
                  <div className="text-xs text-gray-500">{note.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Membership Status */}
        <div className="overflow-hidden rounded-lg border border-border-gray bg-white">
          <div className="border-b border-border-gray px-6 py-5">
            <h3 className="text-base font-semibold text-navy">
              Membership Status
            </h3>
          </div>
          <div className="p-6">
            <div className="mb-6 grid grid-cols-2 gap-8">
              <div>
                <div className="mb-1 text-xs uppercase tracking-wide text-gray-500">
                  Type
                </div>
                <div className="font-semibold text-navy">Corporate</div>
              </div>
              <div>
                <div className="mb-1 text-xs uppercase tracking-wide text-gray-500">
                  Status
                </div>
<span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-success-text">
                  Active
                </span>
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs text-gray-500">Renewal Progress</div>
              <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[35%] rounded-full bg-crimson" />
              </div>
              <div className="mt-2 text-xs text-gray-400">
                Jan 2020 → Jan 2026 · 6 years of membership
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="overflow-hidden rounded-lg border border-border-gray bg-white">
          <div className="border-b border-border-gray px-6 py-5">
            <h3 className="text-base font-semibold text-navy">Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/portal/profile"
                className="rounded-md bg-crimson px-4 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-crimson-dark"
              >
                Edit Profile
              </Link>
              <Link
                href="/events/indo-nepal-trade-festival"
                className="rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-center text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white"
              >
                Events
              </Link>
              <Link
                href="/directory"
                className="rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-center text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white"
              >
                Directory
              </Link>
              <Link
                href="/contact"
                className="rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-center text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white"
              >
                Support
              </Link>
              <Link
                href="/portal/subscription"
                className="rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-center text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white"
              >
                Subscription
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
