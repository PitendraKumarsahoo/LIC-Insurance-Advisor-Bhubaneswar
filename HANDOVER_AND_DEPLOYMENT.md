# Production Client Handover & Deployment Guide
**LIC Insurance Advisor – Bhubaneswar, Odisha**

---

## 1. Client Handover Checklist (Placeholders to Replace)
All customizable advisor and branch details are stored in a single source file:
`/src/data/agent.ts`

When preparing for live delivery to the agent:
1. **`[AGENT NAME]`**: Configured as **Pratap Kumar Sahoo** (official full name registered with IRDAI & LIC).
2. **`[LICENSE NO.]`**: Replace with the official 10/12-digit IRDAI Agent License Number.
3. **`[VALIDITY DATE]`**: Replace with the current license renewal validity date (e.g. *31-03-2027*).
4. **`[AGENT CODE]`**: Replace with the 8-digit servicing agent code assigned by the branch (e.g. *0583088X*).
5. **`[BRANCH]`**: Replace with the servicing branch office in Bhubaneswar (e.g. *Bhubaneswar Branch I, Unit IV / CBO*).
6. **`[OFFICE ADDRESS]`**: Replace with the physical chamber or office address in Bhubaneswar.
7. **`[EMAIL]`**: Replace with the advisor's business email.
8. **`[X] years & [X]+ families`**: Replace with verified track record stats.
9. **`[Club membership]`**: Replace with genuine club standing (e.g. *MDRT / Corporate Club / Galaxy Club*), or omit if not applicable.
10. **Agent Photo**: Place high-resolution formal portrait in `/public/agent-photo.jpg`.

---

## 2. Regulatory Compliance Summary (IRDAI Standards)
- **No Official LIC Logo**: In accordance with LIC corporate regulations, no official LIC logo or corporate insignia is used. The site utilizes a distinguished custom wordmark with shield and lotus insignia.
- **Mandatory Solicitation Notice**: The standard disclaimer appears verbatim across all page footers:
  > *"Insurance is the subject matter of solicitation. [AGENT NAME] is an IRDAI-licensed Insurance Agent of Life Insurance Corporation of India. License No. [LICENSE NO.]..."*
- **No Misleading Guarantees**: All calculators are clearly designated as *"Indicative, not an official quote"*. Market-linked ULIPs state market risk caveats.
- **Official Portals**: Direct external links to `www.licindia.in`, `bimabharosa.irdai.gov.in`, and the Insurance Ombudsman Office in Forest Park, Bhubaneswar are provided.

---

## 3. Firebase & Leads Storage
- **Firestore Database**: Live consultation requests and quotes are securely stored in the `leads` and `saved_quotes` collections.
- **Google Authentication**: Clients and the advisor can sign in with Google to save calculations and view inquiries.
- **Advisor Lead Portal**: Accessible at `/advisor-portal` for the authenticated advisor (`pitendrakumarsahoo52@gmail.com`) to view inquiries, update statuses (Pending, Contacted, Completed), initiate one-click WhatsApp chats, and export leads to CSV.

---

## 4. Deployment Instructions (Vercel / Cloud Run)

### Vercel Deployment:
1. Push repository to GitHub or GitLab.
2. In Vercel dashboard, click **"Add New Project"** and select the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Custom Domain (e.g. licadvisor-bhubaneswar.in):
1. In Vercel Project Settings -> Domains, add your domain.
2. Configure DNS A Record pointing to `76.76.21.21` and CNAME for `www`.
