import { CodeBlock } from '../ui/CodeBlock';
import {
  ExternalLinkIcon,
  DownloadIcon,
  TerminalIcon,
  WrenchIcon,
  InfoIcon,
} from '../ui/Icons';
import { DOWNLOADS } from '../../data/downloads';
import styles from './Downloads.module.css';

export const Downloads = () => {
  const bootImages = DOWNLOADS.recovery_images.filter((img) => img.name === 'boot.img');
  const recoveryImages = DOWNLOADS.recovery_images.filter((img) => img.name === 'vendor_boot.img');

  return (
    <section id="downloads" className={styles.downloads}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionSubtitleLabel}>Releases</span>
          <h2 className={styles.sectionTitle}>Downloads</h2>
          <p className={styles.sectionDescription}>
            Pixelos zip and recovery images for Redmi Note 11T Pro / Pro+ / POCO X4 GT / Redmi K50i (xaga).
          </p>
        </div>

        <div className={styles.dashboard}>
          {/* Main ROM Block */}
          <div className={styles.dashboardSection}>
            <h3 className={styles.dashboardSectionTitle}>PixelOS </h3>
            <div className={styles.romRelease}>
              <div className={styles.romIndicator}></div>
              <div className={styles.romInfo}>
                <div className={styles.romHeader}>
                  <h4 className={styles.romName}>PixelOS ROM</h4>
                </div>
                <div className={styles.romMetadataGrid}>
                  <div className={styles.metadataCell}>
                    <span className={styles.metadataLabel}>Version</span>
                    <span className={styles.metadataValue}>{DOWNLOADS.rom.version}</span>
                  </div>
                  <div className={styles.metadataCell}>
                    <span className={styles.metadataLabel}>Build Date</span>
                    <span className={styles.metadataValue}>{DOWNLOADS.rom.date}</span>
                  </div>
                  <div className={styles.metadataCell}>
                    <span className={styles.metadataLabel}>Package File</span>
                    <span className={styles.metadataValueFilename} title={DOWNLOADS.rom.filename}>
                      {DOWNLOADS.rom.filename}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.romActions}>
                <a href={DOWNLOADS.rom.link} className={styles.downloadRomBtn}>
                  <DownloadIcon size={18} />
                  <span>Download ROM Package</span>
                </a>
              </div>
            </div>
          </div>

          {/* System & Boot Partition Images Table */}
          <div className={styles.dashboardSection}>
            <h3 className={styles.dashboardSectionTitle}>Partition & Boot Images</h3>
            <div className={styles.tableWrapper}>
              <table className={styles.assetsTable}>
                <thead>
                  <tr>
                    <th>Asset Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th className={styles.actionCol}>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {/* vendor_boot.img */}
                  {recoveryImages.map((img) => (
                    <tr key={img.name}>
                      <td className={styles.fileNameCell}><code>{img.name}</code></td>
                      <td><span className={styles.typeBadge}>Recovery</span></td>
                      <td>Recovery image.</td>
                      <td className={styles.actionCol}>
                        <a href={img.link} className={styles.inlineDownloadBtn} title={`Download ${img.name}`}>
                          <DownloadIcon size={16} />
                        </a>
                      </td>
                    </tr>
                  ))}
                  {/* boot.img */}
                  {bootImages.map((img) => (
                    <tr key={img.name}>
                      <td className={styles.fileNameCell}><code>{img.name}</code></td>
                      <td><span className={styles.typeBadge}>Boot Image</span></td>
                      <td>Boot image.</td>
                      <td className={styles.actionCol}>
                        <a href={img.link} className={styles.inlineDownloadBtn} title={`Download ${img.name}`}>
                          <DownloadIcon size={16} />
                        </a>
                      </td>
                    </tr>
                  ))}
                  {/* preloader */}
                  {DOWNLOADS.preloader.map((img) => (
                    <tr key={img.name} id="preloader-download">
                      <td className={styles.fileNameCell}><code>{img.name}</code></td>
                      <td><span className={styles.typeBadgeWarning}>Preloader</span></td>
                      <td>Engineering preloader image.</td>
                      <td className={styles.actionCol}>
                        <a href={img.link} className={styles.inlineDownloadBtn} title={`Download ${img.name}`}>
                          <DownloadIcon size={16} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Utilities and Flashing Tools */}
          <div className={styles.utilitiesRow}>
            {/* Platform Tools */}
            <div className={styles.utilityItem}>
              <div className={styles.utilityHeader}>
                <TerminalIcon size={18} className={styles.utilityIcon} />
                <h4 className={styles.utilityTitle}>Platform Tools</h4>
              </div>
              <p className={styles.utilityDesc}>
                Android Debug Bridge (ADB) and Fastboot binaries are required to communicate with and flash your device.
              </p>
              
              <div className={styles.platformCommandsList}>
                {DOWNLOADS.platform_tools.installs.map((install) => (
                  <div key={install.os} className={styles.platformCmd}>
                    <span className={styles.platformLabel}>{install.os}</span>
                    <CodeBlock
                      code={install.command}
                      language={install.os.toLowerCase()}
                      className={styles.monospaceCodeBlock}
                    />
                  </div>
                ))}
              </div>
              
              <div className={styles.utilityLinkRow}>
                <a
                  href={DOWNLOADS.platform_tools.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  <span>Google Developer SDK Releases</span>
                  <ExternalLinkIcon size={14} />
                </a>
              </div>
            </div>

            {/* USB Drivers */}
            <div className={styles.utilityItem}>
              <div className={styles.utilityHeader}>
                <WrenchIcon size={18} className={styles.utilityIcon} />
                <h4 className={styles.utilityTitle}>USB Interface Drivers</h4>
              </div>
              <p className={styles.utilityDesc}>
                Required for Windows environments when Fastboot commands fail to recognize the device bootloader interface.
              </p>

              <div className={styles.driverDownloadRow}>
                <span className={styles.driverFilename}>
                  <code>{DOWNLOADS.drivers.filename}</code>
                </span>
                <a
                  href={DOWNLOADS.drivers.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadDriverBtn}
                  title="Download USB Drivers"
                >
                  <DownloadIcon size={16} />
                  <span>Download ZIP</span>
                </a>
              </div>

              <div className={styles.driverInstructions}>
                <span className={styles.instructionsHeader}>Installation Steps:</span>
                <ol className={styles.instructionsList}>
                  {DOWNLOADS.drivers.instructions.map((step, idx) => (
                    <li key={idx} className={styles.instructionStep}>
                      <span className={styles.stepNum}>{idx + 1}.</span>
                      <span className={styles.stepText}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* SourceForge Archive & External Channels */}
          <div className={styles.mirrorsSection}>
            <div className={styles.mirrorsInfo}>
              <InfoIcon size={18} className={styles.infoIcon} />
              <span>
                Need older builds or official community discussion? Browse our archives or contact our active developers.
              </span>
            </div>
            <div className={styles.mirrorsGrid}>
              <a
                href={DOWNLOADS.links.sourceforge}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mirrorLink}
              >
                <span>SourceForge Build Archive</span>
                <ExternalLinkIcon size={14} />
              </a>
              <a
                href={DOWNLOADS.links.xda}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mirrorLink}
              >
                <span>Official XDA Forum Thread</span>
                <ExternalLinkIcon size={14} />
              </a>
              <a
                href={DOWNLOADS.links.telegram_support}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mirrorLink}
              >
                <span>Telegram Support Group</span>
                <ExternalLinkIcon size={14} />
              </a>
              <a
                href={DOWNLOADS.links.telegram_channel}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mirrorLink}
              >
                <span>Telegram Updates Channel</span>
                <ExternalLinkIcon size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

