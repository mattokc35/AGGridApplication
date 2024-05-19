from django.http import JsonResponse
import json
import os

def get_chemicals(request):
    # Read data from JSON file
    file_path = os.path.join(os.path.dirname(__file__), 'data', 'data.json')
    with open(file_path) as json_file:
        chemical_data = json.load(json_file)
    
    # Process chemical data and create a list of chemicals
    chemicals = []
    for entry in chemical_data:
        chemical = {
            'id': entry['id'],
            'date': entry['date'],
            'synthesizer': entry['synthesizer'],
            'name': entry['name'],
            'lot': entry['lot'],
            'structure': entry['structure'],
            'category': entry['category'],
            'purpose': entry['purpose'],
            'gram': entry['gram'],
            'sublimationtemp': entry['sublimationtemp'],
            'purities': entry['purities'],
            'inchikey': entry['inchikey'],
            'comment': entry['comment']
        }
        chemicals.append(chemical)
    
    # Return list of chemicals as JSON response
    return JsonResponse(chemicals, safe=False)