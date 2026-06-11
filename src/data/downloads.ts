export const DOWNLOADS = {
  rom: {
    name: "PixelOS ROM",
    version: "16.2 (Android 16)",
    date: "2026-06-11",
    filename: "PixelOS_xaga-16.2-20260611-0652.zip",
    link: "https://pixelos-xaga-worker.angxddeep.workers.dev/PixelOS_xaga-16.2-20260611-0652.zip"
  },
  recovery_images: [
    {
      name: "boot.img",
      link: "https://pixelos-xaga-worker.angxddeep.workers.dev/boot.img"
    },
    {
      name: "vendor_boot.img",
      link: "https://pixelos-xaga-worker.angxddeep.workers.dev/vendor_boot.img"
    }
  ],
  preloader: [
    {
      name: "preloader_xaga.bin",
      link: "https://pixelos-xaga-worker.angxddeep.workers.dev/preloader_xaga.bin"
    }
  ],
  platform_tools: {
    link: "https://developer.android.com/tools/releases/platform-tools",
    installs: [
      {
        os: "Windows",
        command: "winget install -e --id Google.PlatformTools"
      },
      {
        os: "macOS",
        command: "brew install android-platform-tools"
      },
      {
        os: "Linux",
        command: "sudo apt install android-sdk-platform-tools"
      }
    ]
  },
  fastboot_package: {
    name: "Fastboot Package",
    version: "2026-06-11",
    date: "2026-06-11",
    filename: "PixelOS_20260611-0652_FASTBOOT.zip",
    link: "https://pixelos-xaga-worker.angxddeep.workers.dev/PixelOS_20260611-0652_FASTBOOT.zip"
  },

  drivers: {
    filename: "android-bootloader-interface-304243.zip",
    link: "https://pixelos-xaga-worker.angxddeep.workers.dev/android-bootloader-interface-304243.zip",
    instructions: [
      "Locate the android_winusb.inf file.",
      "Right click on it.",
      "Click on Install."
    ]
  },
  links: {
    xda: "https://xdaforums.com/t/development-rom-android-16-unofficial-pixelos-16.2-recovery-build-xaga-march-build.4781663/",
    telegram_support: "https://t.me/XAGASupport",
    telegram_channel: "https://t.me/PixelOS_xaga",
    sourceforge: "https://sourceforge.net/projects/xagaproject/files/Pixelos-xaga"
  }
};
