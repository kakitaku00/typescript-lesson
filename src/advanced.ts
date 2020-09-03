type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: number;
};

type EngineerBlogger = Engineer & Blogger;

const quill: EngineerBlogger = {
  name: "Quill",
  role: "front-end",
  follower: 1000,
};

type tmp = string & number;

function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  } else {
    return "";
  }
}

type NomadWorker = Engineer | Blogger;

function describeWorkerProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if (typeof nomadWorker === "object") {
    if ("role" in nomadWorker) {
      nomadWorker.role;
    }
  }
}

const input = document.getElementById("input") as HTMLElement;

interface Designer {
  name: string;
  [index: string]: string;
}

const designer: Designer = {
  name: "Quill",
  role: "afa",
};

interface Download {
  id: number;
  user?: {
    name?: {
      first: string;
      last: SVGAnimatedString;
    };
  };
}

const download: Download = {
  id: 1,
};

console.log(download.user?.name?.first);
