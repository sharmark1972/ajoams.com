export interface SiteConfig {
  slug: string;
  domain: string;
  name: string;
  shortName: string;
  description: string;
  dbEnvVar: string;
  smtpUserEnvVar: string;
  smtpPassEnvVar: string;
  smtpFromEnvVar: string;
  r2BucketEnvVar: string;
  r2PublicUrlEnvVar: string;
  nextauthSecretEnvVar: string;
}

const sites: Record<string, SiteConfig> = {
  ajoams: {
    slug: 'ajoams',
    domain: 'ajoams.com',
    name: 'American Journal of Advanced Medical and Surgical Sciences',
    shortName: 'AJOAMS',
    description: 'Advanced Medical and Surgical Research',
    dbEnvVar: 'DATABASE_URL_AJOAMS',
    smtpUserEnvVar: 'SMTP_USER_AJOAMS',
    smtpPassEnvVar: 'SMTP_PASS_AJOAMS',
    smtpFromEnvVar: 'SMTP_FROM_AJOAMS',
    r2BucketEnvVar: 'R2_BUCKET_AJOAMS',
    r2PublicUrlEnvVar: 'R2_PUBLIC_URL_AJOAMS',
    nextauthSecretEnvVar: 'NEXTAUTH_SECRET_AJOAMS',
  },
};

const DEV_SITE_SLUG = 'ajoams';

export function getSiteConfig(slug: string): SiteConfig | null {
  return sites[slug] ?? null;
}

export function getSiteConfigByDomain(host: string): SiteConfig | null {
  const domain = host.split(':')[0];

  for (const site of Object.values(sites)) {
    if (site.domain === domain) return site;
  }

  if (domain === 'localhost' || domain === '127.0.0.1') {
    return sites[DEV_SITE_SLUG];
  }

  return null;
}

export function getAllSites(): SiteConfig[] {
  return Object.values(sites);
}
