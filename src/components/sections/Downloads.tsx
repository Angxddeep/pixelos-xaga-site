import { clsx } from 'clsx';
import { CodeBlock } from '../ui/CodeBlock';
import {
  ExternalLinkIcon,
  DownloadIcon,
  WrenchIcon,
} from '../ui/Icons';
import { DOWNLOADS } from '../../data/downloads';
import styles from './Downloads.module.css';

type DownloadAsset = {
  name: string;
  link: string;
};

type AssetGroup = {
  id: string;
  title: string;
  description: string;
  visualLabel: string;
  tone: 'recovery' | 'boot' | 'preloader' | 'archive';
  items?: DownloadAsset[];
  href?: string;
};

export const Downloads = () => {
  const bootImages = DOWNLOADS.recovery_images.filter((img) => img.name === 'boot.img');
  const recoveryImages = DOWNLOADS.recovery_images.filter((img) => img.name === 'vendor_boot.img');

  const assetGroups: AssetGroup[] = [
    {
      id: 'recovery',
      title: 'PixelOS Recovery',
      description: 'Use this image to boot into recovery',
      visualLabel: 'RECOVERY',
      tone: 'recovery',
      items: recoveryImages,
    },
    {
      id: 'boot',
      title: 'Boot Image',
      description: 'Boot Image also patch this image if you want to root',
      visualLabel: 'BOOT IMAGE',
      tone: 'boot',
      items: bootImages,
    },
    {
      id: 'preloader',
      title: 'Engineering Preloader',
      description: 'Revives Devices if Bricked, Very Important',
      visualLabel: 'PRELOADER',
      tone: 'preloader',
      items: DOWNLOADS.preloader,
    },
    {
      id: 'archive',
      title: 'Build Archive',
      description: 'Browse previous PixelOS xaga releases and mirrors on SourceForge.',
      visualLabel: 'ARCHIVE',
      tone: 'archive',
      href: DOWNLOADS.links.sourceforge,
    },
  ];
  const primaryAssetGroups = assetGroups.filter((group) => group.id !== 'archive');
  const archiveGroup = assetGroups.find((group) => group.id === 'archive');

  const renderAssetItem = (asset: DownloadAsset) => (
    <div key={asset.name} className={styles.assetItem}>
      <div className={styles.assetTopRow}>
        <span className={styles.assetFileName}>{asset.name}</span>
        <a href={asset.link} className={styles.assetDownload} title={`Download ${asset.name}`}>
          <DownloadIcon size={18} />
        </a>
      </div>
    </div>
  );

  return (
    <section id="downloads" className={styles.downloads}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Download Hub</h2>
          <p className={styles.sectionSubtitle}>Everything you need to flash PixelOS on xaga.</p>
        </div>

        <div className={styles.grid}>
          <article className={styles.romFeature}>
            <div className={styles.romIntro}>
              <div className={styles.romLead}>
                <h3 className={styles.romTitle}>
                  <span className={styles.romTitleBase}>PixelOS</span>{' '}
                  <span className={styles.romTitleAccent}>OTA ZIP</span>
                </h3>
                <p className={styles.romDescription}>
                  Latest Rom zip for Xaga
                </p>
              </div>

              <div className={styles.romVisual} aria-hidden="true">
                <div className={clsx(styles.visualChipSecondary, styles.romIconChip)}>
                  <img src="/android-icon.svg" alt="" className={styles.romIcon} />
                </div>
              </div>
            </div>

            <div className={styles.romStats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Android</span>
                <strong className={styles.statValue}>{DOWNLOADS.rom.version}</strong>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Build date</span>
                <strong className={styles.statValue}>{DOWNLOADS.rom.date}</strong>
              </div>
            </div>

            <div className={styles.romFooter}>
              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>Filename</span>
                <code className={styles.detailValue}>{DOWNLOADS.rom.filename}</code>
              </div>

              <a href={DOWNLOADS.rom.link} className={styles.primaryAction}>
                <DownloadIcon size={18} />
                Download ZIP
              </a>
            </div>
          </article>

          <article className={styles.romFeature}>
            <div className={styles.romIntro}>
              <div className={styles.romLead}>
                <h3 className={styles.fastbootTitle}>
                  <span className={styles.romTitleBase}>Fastboot</span>{' '}
                  <span className={styles.fastbootTitleAccent}>Package</span>
                </h3>
                <p className={styles.romDescription}>
                  Flash directly via fastboot using a single script
                </p>
              </div>

              <div className={styles.romVisual} aria-hidden="true">
                <div className={clsx(styles.visualChipSecondary, styles.romIconChip)}>
                  <WrenchIcon size={32} />
                </div>
              </div>
            </div>

            <div className={styles.romStats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Version</span>
                <strong className={styles.statValue}>{DOWNLOADS.fastboot_package.version}</strong>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Release date</span>
                <strong className={styles.statValue}>{DOWNLOADS.fastboot_package.date}</strong>
              </div>
            </div>

            <div className={styles.romFooter}>
              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>Filename</span>
                <code className={styles.detailValue}>{DOWNLOADS.fastboot_package.filename}</code>
              </div>

              <a href={DOWNLOADS.fastboot_package.link} className={styles.fastbootAction}>
                <DownloadIcon size={18} />
                Download ZIP
              </a>
            </div>
          </article>

          <div className={styles.assetGrid}>
            {primaryAssetGroups.map((group) => (
              <article
                key={group.id}
                id={group.id === 'preloader' ? 'preloader-download' : undefined}
                className={clsx(styles.assetCard, styles[group.tone])}
              >
                <div className={styles.assetVisual} aria-hidden="true">
                  <div className={styles.assetGlyphSecondary}>{group.visualLabel}</div>
                </div>

                <div className={styles.assetBody}>
                  <h3 className={styles.assetTitle}>{group.title}</h3>
                  <p className={styles.assetDescription}>{group.description}</p>

                  {group.items ? (
                    <div className={styles.assetList}>{group.items.map(renderAssetItem)}</div>
                  ) : (
                    <a
                      href={group.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.archiveLink}
                    >
                      Open SourceForge
                      <ExternalLinkIcon size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <article className={clsx(styles.utilityPanel, styles.platformPanel)}>
            <div className={styles.utilityHeader}>
              <h3 className={styles.utilityTitle}>Platform Tools</h3>
            </div>

            <p className={styles.utilityText}>
              ADB and Fastboot are required for flashing, sideloading, and recovery work.
            </p>

            <a
              href={DOWNLOADS.platform_tools.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
            >
              Download from Google
              <ExternalLinkIcon size={14} />
            </a>

            <div className={styles.platformList}>
              {DOWNLOADS.platform_tools.installs.map((install) => (
                <div key={install.os} className={styles.platformItem}>
                  <span className={styles.platformOs}>{install.os}</span>
                  <CodeBlock
                    code={install.command}
                    language={install.os}
                    className={styles.platformCodeBlock}
                  />
                </div>
              ))}
            </div>
          </article>

          <div className={styles.utilityGrid}>
            {archiveGroup ? (
              <article className={clsx(styles.utilityPanel, styles.archivePanel)}>
                <div className={styles.utilityHeader}>
                  <h3 className={styles.utilityTitle}>SourceForge Archive</h3>
                </div>

                <p className={styles.utilityText}>{archiveGroup.description}</p>

                <a
                  href={archiveGroup.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.archiveLink}
                >
                  Open SourceForge
                  <ExternalLinkIcon size={16} />
                </a>
              </article>
            ) : null}

            <article className={clsx(styles.utilityPanel, styles.driversPanel)}>
              <div className={styles.utilityHeader}>
                <h3 className={styles.utilityTitle}>Drivers</h3>
              </div>

              <p className={styles.utilityText}>
                Install the USB driver first if Fastboot does not detect your device.
              </p>

              <div className={styles.driverCard}>
                <div className={styles.assetTopRow}>
                  <span className={styles.assetFileName}>{DOWNLOADS.drivers.filename}</span>
                  <a
                    href={DOWNLOADS.drivers.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.assetDownload}
                    title={`Download ${DOWNLOADS.drivers.filename}`}
                  >
                    <DownloadIcon size={18} />
                  </a>
                </div>

              </div>

              <ol className={styles.instructionsList}>
                {DOWNLOADS.drivers.instructions.map((instruction) => (
                  <li key={instruction} className={styles.instructionItem}>
                    {instruction}
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
