"use client";

import { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "../../../components/DashboardLayout";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <DashboardLayout activeItem="Profile">
      {/* Welcome Banner */}
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg border border-border-gray bg-white p-8 md:flex-row md:items-center">
        <div>
          <h2 className="mb-2 text-2xl font-heading text-navy">Profile Management</h2>
          <p className="text-sm text-gray-500">Manage your personal and business information</p>
        </div>
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "6px 14px",
              borderRadius: "100px",
              fontSize: "var(--text-xs)",
              fontWeight: 700,
              background: "#C6F6D5",
              color: "#22543D",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ width: 14, height: 14 }}
            >
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
            Corporate Member
          </span>
          <button
            onClick={toggleEditMode}
            className="btn btn--primary btn--sm"
          >
            {isEditing ? (
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ width: 14, height: 14 }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Save Profile
              </>
            ) : (
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ width: 14, height: 14 }}
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Edit Profile
              </>
            )}
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <div className="mb-6 rounded-lg border border-border-gray bg-white">
        <div className="flex items-center justify-between border-b border-border-gray px-6 py-5">
          <h3 className="text-base font-semibold text-navy">Personal Information</h3>
          <span className="text-xs text-gray-500">{isEditing ? "Editing" : "Read Only"}</span>
        </div>
        <div className="p-6">
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Full Name
              </label>
              <input
                type="text"
                readOnly={!isEditing}
                defaultValue="Yubraj Baral"
                className={
                  isEditing
                    ? "form-input form-edit rounded-md border border-ice-blue bg-white px-4 py-2.5 text-sm text-navy"
                    : "form-input form-read rounded-md bg-gray-100 px-4 py-2.5 text-sm text-gray-700"
                }
              />
            </div>
            <div>
              <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Phone
              </label>
              <input
                type="text"
                readOnly={!isEditing}
                defaultValue="+977 9841 234567"
                className={
                  isEditing
                    ? "form-input form-edit rounded-md border border-ice-blue bg-white px-4 py-2.5 text-sm text-navy"
                    : "form-input form-read rounded-md bg-gray-100 px-4 py-2.5 text-sm text-gray-700"
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Email
              </label>
              <input
                type="text"
                readOnly={!isEditing}
                defaultValue="yubraj@everestchamber.com"
                className={
                  isEditing
                    ? "form-input form-edit rounded-md border border-ice-blue bg-white px-4 py-2.5 text-sm text-navy"
                    : "form-input form-read rounded-md bg-gray-100 px-4 py-2.5 text-sm text-gray-700"
                }
              />
            </div>
            <div>
              <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Date of Birth
              </label>
              <input
                type="text"
                readOnly={!isEditing}
                defaultValue="January 15, 1975"
                className={
                  isEditing
                    ? "form-input form-edit rounded-md border border-ice-blue bg-white px-4 py-2.5 text-sm text-navy"
                    : "form-input form-read rounded-md bg-gray-100 px-4 py-2.5 text-sm text-gray-700"
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Business Information */}
      <div className="mb-6 rounded-lg border border-border-gray bg-white">
        <div className="flex items-center justify-between border-b border-border-gray px-6 py-5">
          <h3 className="text-base font-semibold text-navy">Business Information</h3>
          <span className="text-xs text-gray-500">{isEditing ? "Editing" : "Read Only"}</span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Company
              </label>
              <input
                type="text"
                readOnly={!isEditing}
                defaultValue="Everest Holdings Pvt. Ltd."
                className={
                  isEditing
                    ? "form-input form-edit rounded-md border border-ice-blue bg-white px-4 py-2.5 text-sm text-navy"
                    : "form-input form-read rounded-md bg-gray-100 px-4 py-2.5 text-sm text-gray-700"
                }
              />
            </div>
            <div>
              <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Industry
              </label>
              <input
                type="text"
                readOnly={!isEditing}
                defaultValue="Hospitality & Tourism"
                className={
                  isEditing
                    ? "form-input form-edit rounded-md border border-ice-blue bg-white px-4 py-2.5 text-sm text-navy"
                    : "form-input form-read rounded-md bg-gray-100 px-4 py-2.5 text-sm text-gray-700"
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Membership Details */}
      <div className="mb-6 rounded-lg border border-border-gray bg-white">
        <div className="border-b border-border-gray px-6 py-5">
          <h3 className="text-base font-semibold text-navy">Membership Details</h3>
        </div>
        <div className="p-6">
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Type
              </label>
              <input
                type="text"
                readOnly
                defaultValue="Corporate Member"
                className="form-input form-read rounded-md bg-white px-4 py-2.5 text-sm text-navy"
              />
            </div>
            <div>
              <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Status
              </label>
              <div className="py-2.5">
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    padding: "4px 12px",
                    borderRadius: "100px",
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    background: "#C6F6D5",
                    color: "#22543D",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#38A169",
                    }}
                  />
                  Active
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Member Since
              </label>
              <input
                type="text"
                readOnly
                defaultValue="January 2020"
                className="form-input form-read rounded-md bg-white px-4 py-2.5 text-sm text-navy"
              />
            </div>
            <div>
              <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Renewal Date
              </label>
              <input
                type="text"
                readOnly
                defaultValue="January 2026"
                className="form-input form-read rounded-md bg-white px-4 py-2.5 text-sm text-navy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Controls */}
      <div className="mb-6 rounded-lg border border-border-gray bg-white">
        <div className="flex items-center justify-between border-b border-border-gray px-6 py-5">
          <h3 className="text-base font-semibold text-navy">Privacy Controls</h3>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ width: 18, height: 18, color: "var(--gray-400)" }}
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <div className="p-6" style={{ paddingTop: 0 }}>
          <div className="flex items-center justify-between py-3">
            <div>
              <div className="text-sm font-medium text-navy">Visible in Business Directory</div>
              <div className="text-xs text-gray-500">Allow other members to find you in the business directory</div>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div
                className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-crimson after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5"
              />
            </label>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <div className="text-sm font-medium text-navy">Show Phone in Directory</div>
              <div className="text-xs text-gray-500">Display your phone number in the public directory listing</div>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="sr-only peer" />
              <div
                className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-crimson after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5"
              />
            </label>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <div className="text-sm font-medium text-navy">Show Email in Directory</div>
              <div className="text-xs text-gray-500">Display your email address in the public directory listing</div>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div
                className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-crimson after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5"
              />
            </label>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <div className="text-sm font-medium text-navy">Visible in Matrimonial Section</div>
              <div className="text-xs text-gray-500">Allow your profile to appear in the matrimonial section</div>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="sr-only peer" />
              <div
                className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-crimson after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 md:flex-row">
        <button className="btn btn--primary btn--lg">Save Changes</button>
        <Link
          href="/portal/dashboard"
          className="btn btn--outline btn--lg inline-flex items-center justify-center"
        >
          Cancel
        </Link>
      </div>
    </DashboardLayout>
  );
}
