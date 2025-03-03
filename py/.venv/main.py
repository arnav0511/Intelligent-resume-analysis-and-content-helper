from fastapi import FastAPI, HTTPException #type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
import requests #type: ignore
from pdfminer.high_level import extract_text
import os



app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/api/process-pdf")
def process_pdf(data: dict):
    uuid = data.get("uuid")
    if not uuid:
        raise HTTPException(status_code=400, detail="UUID is required")

    pdf_url = f"https://ucarecdn.com/{uuid}/"

    try:

        response = requests.get(pdf_url)
        if response.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to download file")


        temp_pdf_path = "temp.pdf"
        with open(temp_pdf_path, "wb") as f:
            f.write(response.content)


        extracted_text = extract_text(temp_pdf_path)


        os.remove(temp_pdf_path)

        return extracted_text

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
