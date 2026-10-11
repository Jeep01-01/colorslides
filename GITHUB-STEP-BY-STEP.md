# ColorSlides – install guide (no GitHub knowledge needed)

## A. Put the files on GitHub (once)
1. Sign in at github.com. Click **+** (top right) → **New repository**.
2. Repository name: `colorslides`. Choose **Public**. Click **Create repository**.
3. Click **uploading an existing file**. Unzip `ColorSlides-repo.zip` on your device and drag ALL files into the page (the `.github` folder too).
4. Click **Commit changes**.
5. If the `.github` folder was not uploaded: **Add file → Create new file**, type the name `.github/workflows/windows.yml`, paste the contents of that file from the zip, then **Commit changes**.

## B. Huawei tablet (and any phone/tablet)
1. Repository → **Settings → Pages**. Under *Branch* choose **main** and **/ (root)**, press **Save**.
2. Wait 2 minutes. Your app address is `https://YOUR-NAME.github.io/colorslides/`
3. Open it in the tablet browser → menu (⋮) → **Add to Home screen / Install app**.

## C. Windows 11
**Easy way:** open the address above in Edge → ⋯ → **Apps → Install this site as an app**.

**Installer (.exe) way:**
1. Repository → **Actions** tab (press the green enable button if shown). Wait for **Build Windows installer** to get a green tick (about 5 minutes). Use **Run workflow** to start it again.
2. Click the finished run, scroll to the bottom → **Artifacts** → **ColorSlides-Windows-Installer**. Unzip it and run `ColorSlides Setup 1.0.0.exe`.

## Using the app
- **File** menu: New, Open (.pptx or .cslides), Save (.cslides), Export PowerPoint (.pptx), Export PDF, Print.
- **Present** button (or F5) starts the slide show. Arrow keys, click or swipe to move; Esc to exit.
- Double-click a text object to type. Drag to move, use the round handles to resize.
