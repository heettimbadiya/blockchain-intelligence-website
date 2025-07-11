import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  Search, 
  Filter, 
  Download, 
  LogOut, 
  Mail, 
  Phone, 
  Building, 
  Globe, 
  Calendar,
  Eye,
  Trash2,
  Plus,
  ChevronDown,
  ChevronUp,
  Shield
} from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminContact() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("submittedAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedContact, setSelectedContact] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("https://chainalysis-be.onrender.com/api/contacts");
      const contactsWithId = response.data.map((contact) => ({
        ...contact,
        id: contact._id,
        submittedAt: contact.createdAt,
      }));
      setContacts(contactsWithId);
      setFilteredContacts(contactsWithId);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("Failed to fetch contacts. Please try again.");
      // Fallback to dummy data for demo
      const dummyContacts = [
        {
          id: "1",
          firstName: "John",
          lastName: "Doe",
          businessEmail: "john.doe@example.com",
          phoneNumber: "1234567890",
          companyName: "Tech Corp",
          country: "United States",
          organizationType: "Enterprise",
          solutionOfInterest: "Compliance",
          heardAboutUs: "Google Search",
          customMessage: "Interested in learning more about your compliance solutions.",
          submittedAt: "2024-01-15T10:30:00Z",
        },
        {
          id: "2",
          firstName: "Jane",
          lastName: "Smith",
          businessEmail: "jane.smith@fintech.com",
          phoneNumber: "9876543210",
          companyName: "FinTech Solutions",
          country: "Canada",
          organizationType: "Startup",
          solutionOfInterest: "Investigations",
          heardAboutUs: "Referral",
          customMessage: "Looking for blockchain investigation tools for our platform.",
          submittedAt: "2024-01-14T14:20:00Z",
        },
        {
          id: "3",
          firstName: "Mike",
          lastName: "Johnson",
          businessEmail: "mike.johnson@bank.com",
          phoneNumber: "5551234567",
          companyName: "Global Bank",
          country: "United Kingdom",
          organizationType: "Financial Institution",
          solutionOfInterest: "Analytics",
          heardAboutUs: "Industry Conference",
          customMessage: "Need advanced analytics for regulatory compliance.",
          submittedAt: "2024-01-13T09:15:00Z",
        },
      ];
      setContacts(dummyContacts);
      setFilteredContacts(dummyContacts);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    toast.success("Logged out successfully");
    navigate("/admin");
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filtered = contacts.filter((contact) =>
      Object.values(contact).some((field) =>
        field?.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredContacts(filtered);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  const sortedContacts = [...filteredContacts].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];

    if (sortBy === "submittedAt") {
      aValue = new Date(a.submittedAt);
      bValue = new Date(b.submittedAt);
    }

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const exportContacts = () => {
    const csvContent = [
      ["First Name", "Last Name", "Email", "Phone", "Company", "Country", "Organization Type", "Solution of Interest", "Heard About Us", "Custom Message", "Date"],
      ...sortedContacts.map((contact) => [
        contact.firstName,
        contact.lastName,
        contact.businessEmail,
        contact.phoneNumber,
        contact.companyName || "N/A",
        contact.country || "N/A",
        contact.organizationType || "N/A",
        contact.solutionOfInterest || "N/A",
        contact.heardAboutUs || "N/A",
        contact.customMessage || "N/A",
        formatDate(contact.submittedAt),
      ]),
    ].map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contacts-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success("Contacts exported successfully!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#27346a]">Contact Management</h1>
                <p className="text-sm text-gray-600">
                  {sortedContacts.length} contact{sortedContacts.length !== 1 ? "s" : ""} found
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={exportContacts}
                className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
              <button
                onClick={handleLogout}
                className="flex cursor-pointer items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                />
              </div>
            </div>

            {/* Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex cursor-pointer items-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-orange-500 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
              {showFilters ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                  className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                >
                  <option value="submittedAt">Sort by Date</option>
                  <option value="firstName">Sort by First Name</option>
                  <option value="lastName">Sort by Last Name</option>
                  <option value="businessEmail">Sort by Email</option>
                  <option value="companyName">Sort by Company</option>
                  <option value="country">Sort by Country</option>
                  <option value="organizationType">Sort by Organization Type</option>
                  <option value="solutionOfInterest">Sort by Solution</option>
                </select>
                <button
                  onClick={() => handleSort(sortBy)}
                  className="px-4 cursor-pointer py-2 border-2 border-gray-200 rounded-lg hover:border-orange-500 transition-colors"
                >
                  {sortOrder === "asc" ? "↑ Ascending" : "↓ Descending"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Contacts List */}
        <div className="grid gap-6">
          {sortedContacts.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#27346a] mb-2">No contacts found</h3>
              <p className="text-gray-600">
                {searchTerm ? "Try adjusting your search terms." : "No contacts have been submitted yet."}
              </p>
            </div>
          ) : (
            sortedContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Contact Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <h3 className="text-lg font-semibold text-[#27346a]">
                              {contact.firstName} {contact.lastName}
                            </h3>
                            <span className="text-sm text-gray-500">
                              {formatDate(contact.submittedAt)}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-orange-500" />
                              <span className="text-gray-600">{contact.businessEmail}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-orange-500" />
                              <span className="text-gray-600">{contact.phoneNumber}</span>
                            </div>
                            {contact.companyName && (
                              <div className="flex items-center gap-2">
                                <Building className="w-4 h-4 text-orange-500" />
                                <span className="text-gray-600">{contact.companyName}</span>
                              </div>
                            )}
                            {contact.country && (
                              <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-orange-500" />
                                <span className="text-gray-600">{contact.country}</span>
                              </div>
                            )}
                            {contact.organizationType && (
                              <div className="flex items-center gap-2">
                                <Building className="w-4 h-4 text-orange-500" />
                                <span className="text-gray-600">{contact.organizationType}</span>
                              </div>
                            )}
                            {contact.solutionOfInterest && (
                              <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-orange-500" />
                                <span className="text-gray-600">{contact.solutionOfInterest}</span>
                              </div>
                            )}
                          </div>

                          {contact.customMessage && (
                            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                              <p className="text-sm text-gray-700">{contact.customMessage}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 lg:flex-col">
                      <button
                        onClick={() => setSelectedContact(contact)}
                        className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-[#0000009c] flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#27346a]">
                  Contact Details
                </h2>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-600">First Name</label>
                    <p className="text-lg text-[#27346a]">{selectedContact.firstName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Last Name</label>
                    <p className="text-lg text-[#27346a]">{selectedContact.lastName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Email</label>
                    <p className="text-lg text-[#27346a]">{selectedContact.businessEmail}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Phone</label>
                    <p className="text-lg text-[#27346a]">{selectedContact.phoneNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Company</label>
                    <p className="text-lg text-[#27346a]">
                      {selectedContact.companyName || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Country</label>
                    <p className="text-lg text-[#27346a]">
                      {selectedContact.country || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Organization Type</label>
                    <p className="text-lg text-[#27346a]">
                      {selectedContact.organizationType || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Solution of Interest</label>
                    <p className="text-lg text-[#27346a]">
                      {selectedContact.solutionOfInterest || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Heard About Us</label>
                    <p className="text-lg text-[#27346a]">
                      {selectedContact.heardAboutUs || "Not provided"}
                    </p>
                  </div>
                </div>

                {selectedContact.customMessage && (
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Message</label>
                    <p className="text-lg text-[#27346a] mt-2">{selectedContact.customMessage}</p>
                  </div>
                )}

                <div>
                  <label className="text-sm font-semibold text-gray-600">Submitted</label>
                  <p className="text-lg text-[#27346a]">{formatDate(selectedContact.submittedAt)}</p>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setSelectedContact(null)}
                  className="px-6 cursor-pointer py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 